export const jsonstoreurl = 'https://api.jsonbin.io/b/5dbaaad97879cc1d07390197'; // 'https://www.jsonstore.io/66d38a6c4496b5e47fd54567ba3690b4dc6067cc8acb2b9236303abf657b9693/triprun';
// this is only required with jsonbin.io API
const h = new Headers();
h.append('Content-Type', 'application/json');
h.append('secret-key', '$2b$10$9UaukmFBkP.Wk4Y6INUYG.1FKBlQrdHnz9W5ZV4BHy7trELa0I4k6');
export const headers = h;
