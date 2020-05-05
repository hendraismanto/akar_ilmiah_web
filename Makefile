export GOPATH=$(PWD)

build:
	go build -o bin/web_server src/web_server/main.go

run:
	go run src/web_server/main.go
