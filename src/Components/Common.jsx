async function fetchData(url) {
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error("Error:" + resp.statusText);
      }
      return await resp.json();
    } catch (err) {
      console.log(err);
      return 0;
    }
  }

export { fetchData };
