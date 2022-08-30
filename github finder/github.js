class GitHub {
  constructor() {
    this.client_id = "620e04a630a318920a25";
    this.client_secret = "5cad3aee5a54a964b5c6f84608cbbfc6013a9548";
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
