import logging
from urllib.parse import urljoin, urlsplit
import requests
from bs4 import BeautifulSoup

logging.basicConfig(
    format='%(asctime)s %(levelname)s:%(message)s',
    level=logging.INFO)

class Crawler:

    def __init__(self, urls, exclusions):
        self.visited_urls = []
        self.failed_urls = []
        self.urls_to_visit = urls
        self.exclusions = exclusions

        self.domain = urlsplit(urls[0]).netloc
        print('base domain:', self.domain)
        

    def download_url(self, url):
        res = requests.get(url)
        return res.text, res.status_code

    def get_links(self, url, html):
        soup = BeautifulSoup(html, 'html.parser')
        links = soup.find_all('a')
        for link in links:
            path = link.get('href')
            if path and path.startswith('/'):
                path = urljoin(url, path)
            yield path

    def get_buttons(self, url, html):
        soup = BeautifulSoup(html, 'html.parser')
        links = soup.find_all('button')
        for link in links:
            path = link.get('href')
            path = urljoin(url, path)
            yield path

    def add_url_to_visit(self, url):
        if url not in self.visited_urls and url not in self.urls_to_visit:
            self.urls_to_visit.append(url)

    def check_for_errors(self, url, html):
        if 'Error' in html:
            # print(html)
            raise Exception(f'Error in {url}')

        return

    def crawl(self, url):
        html, status = self.download_url(url)
        
        if status != 200:
            logging.exception(f"Status {status} returned from {url}")
            raise Exception("Response returned an error status")

        self.check_for_errors(url, html)
        for url in self.get_links(url, html):
            self.add_url_to_visit(url)

        for url in self.get_buttons(url, html):
            self.add_url_to_visit(url)

    def run(self):
        while self.urls_to_visit:
            url = self.urls_to_visit.pop(0)
            
            split = urlsplit(url)
            path = split.path
            domain = split.netloc
            if domain != self.domain or path in self.exclusions:
                # logging.info(f'Skipping {url}')
                continue

            try:
                logging.info(f'{url}')
                self.crawl(url)
            except Exception:
                logging.exception(f"Failed to crawl {url}")
                self.failed_urls.append(url)
            finally:
                self.visited_urls.append(url)
            
        if self.failed_urls:
            logging.info('Failed URLS:')
            print('\n'.join(self.failed_urls))

if __name__ == '__main__':
    exclusions =['/',]
    Crawler(
        urls=['http://localhost:3000/landing-page-apps'],
        exclusions=exclusions
    ).run()