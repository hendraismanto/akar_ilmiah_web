package main

import (
	"log"
	"net/http"
)

/*
func Check(err error) {
	if err != nil {
		panic(err.Error())
	}
}

func AbsolutePath(path string) string {
	absolute_path, err := filepath.Abs(path)
	Check(err)
	return absolute_path
}
*/

func main() {
	fs := http.FileServer(http.Dir("web/static"))
	http.Handle("/", fs)
	log.Println("Listening on :3001...")
	err := http.ListenAndServe(":3001", nil)
	if err != nil {
		log.Fatal(err)
	}
}
