import { GetUserDataReturnType } from "./types"

export const getUserData = async (): Promise<GetUserDataReturnType> => {
  const query = `
    query {
      user(login: "alikouhfar") {
        followers {
          totalCount
        }
        repositories(first: 100, ownerAffiliations: OWNER) {
          totalCount
          nodes {
            name
            stargazerCount
            forkCount
          }
        }
      }
    }
  `

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })

  const json = await res.json()
  const user = json.data?.user

  if (!user) {
    throw new Error("GitHub API returned no user data")
  }

  return {
    followers: user.followers,
    repositories: user.repositories,
  }
}
