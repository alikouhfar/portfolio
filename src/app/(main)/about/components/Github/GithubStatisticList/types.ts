export type RespositoryType = {
  name: string
  stargazerCount: number
  forkCount: number
}

export type GetUserDataReturnType = {
  followers: {
    totalCount: number
  }
  repositories: {
    totalCount: number
    nodes: Array<RespositoryType>
  }
}
