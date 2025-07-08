export async function load({ fetch }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return { users };
  }