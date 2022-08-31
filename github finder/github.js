class GitHub {
  constructor() {
    this.config = {
      headers: {
        Authorization: "token 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",
      },
    };
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      this.config
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
