class GitHub {
  constructor() {
    this.client_id = "280b51771016c4d8d41c";
    this.client_secret = "43e627c2529eaf884d3af23715baf3108906304a";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
