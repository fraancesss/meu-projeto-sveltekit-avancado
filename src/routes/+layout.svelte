<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
  
    let { children } = $props();
  </script>
  
  <div class="d-flex flex-column min-vh-100 container-fluid">
    <Header />
  
    <main>{@render children()}</main>
  
    <Footer />
  </div>

  