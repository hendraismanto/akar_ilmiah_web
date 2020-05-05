export GOPATH=$(PWD)

build:
	go build -o bin/web src/web_server/main.go

run:
	go run src/web_server/main.go