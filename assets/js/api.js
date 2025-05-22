async function fetchProfileData() {
    const url =
        'https://raw.githubusercontent.com/marcella2808/dio-desafio-portfolio/refs/heads/main/data/profile.json';
    const response = await fetch(url);
    const profileData = await response.json();
    return profileData;
}
