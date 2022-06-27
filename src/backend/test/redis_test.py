import redis
# from rediscluster import RedisCluster

from endpoints.get_session import GetSession
from common.adapter import RedisSessionAdapter
from spine_aws_common.logger import Logger


from icecream import ic

r = redis.Redis(host='localhost', port=6379, db=0)
r.set('dog', 'spaniel')
print('Redis:', r.get('dog'))

'''
startup_nodes = [{"host": "localhost", "port": "6379"}]
rc = RedisCluster(startup_nodes=startup_nodes, decode_responses=True)
rc.set("chocolate", "marathon")
print('Redis cluster :', rc.get("chocolate"))
'''
session = GetSession(RedisSessionAdapter, Logger, 'dev')
ic(session.session_id)
