export interface IRespository {
  name: string
  stargazerCount: number
  forkCount: number
}

export interface IGetUserDataReturn {
  followers: {
    totalCount: number
  }
  repositories: {
    totalCount: number
    nodes: Array<IRespository>
  }
}
