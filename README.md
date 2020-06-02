# DDOR

install project with

```
yarn install
```

test backend with

(if you modify map.js the tests wont pass)

```
yarn workspace backend test
```

start backend with (port 4000)

```
yarn workspace backend start

curl -X POST -H "Content-Type:application/json" http://localhost:4000/moves --data '{ "moves": ["e", "e", "e", "e"] }'
```

start web-client with (port 3000)

```
yarn workspace web-client start
```
