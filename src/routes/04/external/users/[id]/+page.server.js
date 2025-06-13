export async function load({ params, fetch }) {
  const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await resUser.json();

  const resPosts = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/posts`);
  const posts = await resPosts.json();

  return { user, posts };
}