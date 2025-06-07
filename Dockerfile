FROM elasticsearch:7.17.10

ENV discovery.type=single-node
ENV ES_JAVA_OPTS="-Xms256m -Xmx256m"
ENV xpack.security.enabled=false
ENV http.port=8080

EXPOSE 8080
