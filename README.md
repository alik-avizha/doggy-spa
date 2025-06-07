# Запуск Elasticsearch в Docker и вызов API

В этом проекте используется Docker-образ Elasticsearch версии 7.17.10

## Запуск Elasticsearch в Docker

1. Скачайте и запустите контейнер с Elasticsearch командой:

docker run -d --name elasticsearch-dogs
-e discovery.type=single-node
-e ES_JAVA_OPTS="-Xms256m -Xmx256m"
-e xpack.security.enabled=false
-p 8080:8080
elasticsearch:7.17.10


2. Проверьте, что Elasticsearch запущен и доступен:

curl http://localhost:8080


Вы должны получить ответ от Elasticsearch.

## Вызов метода `/api/updaDogs`

После запуска контейнера и старта вашего Next.js приложения, вызовите API-эндпоинт для обновления данных собак:

curl -X GET http://localhost:3000/api/updaDogs


> Замените `localhost:3000` на адрес и порт вашего сервера Next.js.

---

Эти инструкции помогут быстро поднять Elasticsearch в Docker и протестировать взаимодействие с вашим API.
