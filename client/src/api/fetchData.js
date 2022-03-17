async function fetchData(domain) {
    const res = await fetch(`/api/advertisers/?domain=${domain}`);
    if (res.status !== 200) {
        throw 'Problem with the domain';
    }
    const data = await res.json();
    return data;
}

export default fetchData;