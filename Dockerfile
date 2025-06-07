FROM elasticsearch:7.17.10

ENV discovery.type=single-node
ENV ES_JAVA_OPTS="-Xms512m -Xmx512m"
ENV xpack.security.enabled=false

EXPOSE 9200
