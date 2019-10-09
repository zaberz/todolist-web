import request from "@/libs/request";

export function login(data) {
  return request.post("login", data);
}

export function registry(data) {
  return request.post("registry", data);
}
