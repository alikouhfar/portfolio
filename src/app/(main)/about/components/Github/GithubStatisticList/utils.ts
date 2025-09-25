import { GetUserDataReturnType } from './types'

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
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })

  const json = await res.json()
  return json.data.user
}
