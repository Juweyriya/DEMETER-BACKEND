import {
  ICommit,
  ICommitResponse,
  IFailureResponse,
  IRepository,
  ITemplateRepository,
} from '../src/types/githubData';
export const repositoryWithMultipleCommits: IRepository = {
  id: 419280827,
  node_id: 'R_kgDOGP23uw',
  name: 'github-tests',
  full_name: 'onlyasmalllizard/github-tests',
  private: false,
  owner: {
    login: 'onlyasmalllizard',
    id: 30602046,
    node_id: 'MDQ6VXNlcjMwNjAyMDQ2',
    avatar_url: 'https://avatars.githubusercontent.com/u/30602046?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/onlyasmalllizard',
    html_url: 'https://github.com/onlyasmalllizard',
    followers_url: 'https://api.github.com/users/onlyasmalllizard/followers',
    following_url:
      'https://api.github.com/users/onlyasmalllizard/following{/other_user}',
    gists_url: 'https://api.github.com/users/onlyasmalllizard/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/onlyasmalllizard/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/onlyasmalllizard/subscriptions',
    organizations_url: 'https://api.github.com/users/onlyasmalllizard/orgs',
    repos_url: 'https://api.github.com/users/onlyasmalllizard/repos',
    events_url:
      'https://api.github.com/users/onlyasmalllizard/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/onlyasmalllizard/received_events',
    type: 'User',
    site_admin: false,
  },
  html_url: 'https://github.com/onlyasmalllizard/github-tests',
  description: null,
  fork: false,
  url: 'https://api.github.com/repos/onlyasmalllizard/github-tests',
  forks_url: 'https://api.github.com/repos/onlyasmalllizard/github-tests/forks',
  keys_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/keys{/key_id}',
  collaborators_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/onlyasmalllizard/github-tests/teams',
  hooks_url: 'https://api.github.com/repos/onlyasmalllizard/github-tests/hooks',
  issue_events_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/issues/events{/number}',
  events_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/events',
  assignees_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/assignees{/user}',
  branches_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/branches{/branch}',
  tags_url: 'https://api.github.com/repos/onlyasmalllizard/github-tests/tags',
  blobs_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/git/blobs{/sha}',
  git_tags_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/git/tags{/sha}',
  git_refs_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/git/refs{/sha}',
  trees_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/git/trees{/sha}',
  statuses_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/statuses/{sha}',
  languages_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/languages',
  stargazers_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/stargazers',
  contributors_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/contributors',
  subscribers_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/subscribers',
  subscription_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/subscription',
  commits_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/commits{/sha}',
  git_commits_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/git/commits{/sha}',
  comments_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/comments{/number}',
  issue_comment_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/issues/comments{/number}',
  contents_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/contents/{+path}',
  compare_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/compare/{base}...{head}',
  merges_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/merges',
  archive_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/{archive_format}{/ref}',
  downloads_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/downloads',
  issues_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/issues{/number}',
  pulls_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/pulls{/number}',
  milestones_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/milestones{/number}',
  notifications_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/notifications{?since,all,participating}',
  labels_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/labels{/name}',
  releases_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/releases{/id}',
  deployments_url:
    'https://api.github.com/repos/onlyasmalllizard/github-tests/deployments',
  created_at: '2021-10-20T10:17:26Z',
  updated_at: '2021-10-29T14:06:22Z',
  pushed_at: '2021-10-28T08:32:08Z',
  git_url: 'git://github.com/onlyasmalllizard/github-tests.git',
  ssh_url: 'git@github.com:onlyasmalllizard/github-tests.git',
  clone_url: 'https://github.com/onlyasmalllizard/github-tests.git',
  svn_url: 'https://github.com/onlyasmalllizard/github-tests',
  homepage: '',
  size: 35,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'JavaScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  allow_forking: true,
  is_template: false,
  topics: ['workshop'],
  visibility: 'public',
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'main',
  temp_clone_token: null,
  network_count: 0,
  subscribers_count: 1,
};

export const repositoryWithSingleCommit: IRepository = {
  id: 425870189,
  node_id: 'R_kgDOGWJDbQ',
  name: 'test',
  full_name: 'onlyasmalllizard/test',
  private: false,
  owner: {
    login: 'onlyasmalllizard',
    id: 30602046,
    node_id: 'MDQ6VXNlcjMwNjAyMDQ2',
    avatar_url: 'https://avatars.githubusercontent.com/u/30602046?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/onlyasmalllizard',
    html_url: 'https://github.com/onlyasmalllizard',
    followers_url: 'https://api.github.com/users/onlyasmalllizard/followers',
    following_url:
      'https://api.github.com/users/onlyasmalllizard/following{/other_user}',
    gists_url: 'https://api.github.com/users/onlyasmalllizard/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/onlyasmalllizard/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/onlyasmalllizard/subscriptions',
    organizations_url: 'https://api.github.com/users/onlyasmalllizard/orgs',
    repos_url: 'https://api.github.com/users/onlyasmalllizard/repos',
    events_url:
      'https://api.github.com/users/onlyasmalllizard/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/onlyasmalllizard/received_events',
    type: 'User',
    site_admin: false,
  },
  html_url: 'https://github.com/onlyasmalllizard/test',
  description: null,
  fork: false,
  url: 'https://api.github.com/repos/onlyasmalllizard/test',
  forks_url: 'https://api.github.com/repos/onlyasmalllizard/test/forks',
  keys_url: 'https://api.github.com/repos/onlyasmalllizard/test/keys{/key_id}',
  collaborators_url:
    'https://api.github.com/repos/onlyasmalllizard/test/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/onlyasmalllizard/test/teams',
  hooks_url: 'https://api.github.com/repos/onlyasmalllizard/test/hooks',
  issue_events_url:
    'https://api.github.com/repos/onlyasmalllizard/test/issues/events{/number}',
  events_url: 'https://api.github.com/repos/onlyasmalllizard/test/events',
  assignees_url:
    'https://api.github.com/repos/onlyasmalllizard/test/assignees{/user}',
  branches_url:
    'https://api.github.com/repos/onlyasmalllizard/test/branches{/branch}',
  tags_url: 'https://api.github.com/repos/onlyasmalllizard/test/tags',
  blobs_url:
    'https://api.github.com/repos/onlyasmalllizard/test/git/blobs{/sha}',
  git_tags_url:
    'https://api.github.com/repos/onlyasmalllizard/test/git/tags{/sha}',
  git_refs_url:
    'https://api.github.com/repos/onlyasmalllizard/test/git/refs{/sha}',
  trees_url:
    'https://api.github.com/repos/onlyasmalllizard/test/git/trees{/sha}',
  statuses_url:
    'https://api.github.com/repos/onlyasmalllizard/test/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/onlyasmalllizard/test/languages',
  stargazers_url:
    'https://api.github.com/repos/onlyasmalllizard/test/stargazers',
  contributors_url:
    'https://api.github.com/repos/onlyasmalllizard/test/contributors',
  subscribers_url:
    'https://api.github.com/repos/onlyasmalllizard/test/subscribers',
  subscription_url:
    'https://api.github.com/repos/onlyasmalllizard/test/subscription',
  commits_url:
    'https://api.github.com/repos/onlyasmalllizard/test/commits{/sha}',
  git_commits_url:
    'https://api.github.com/repos/onlyasmalllizard/test/git/commits{/sha}',
  comments_url:
    'https://api.github.com/repos/onlyasmalllizard/test/comments{/number}',
  issue_comment_url:
    'https://api.github.com/repos/onlyasmalllizard/test/issues/comments{/number}',
  contents_url:
    'https://api.github.com/repos/onlyasmalllizard/test/contents/{+path}',
  compare_url:
    'https://api.github.com/repos/onlyasmalllizard/test/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/onlyasmalllizard/test/merges',
  archive_url:
    'https://api.github.com/repos/onlyasmalllizard/test/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/onlyasmalllizard/test/downloads',
  issues_url:
    'https://api.github.com/repos/onlyasmalllizard/test/issues{/number}',
  pulls_url:
    'https://api.github.com/repos/onlyasmalllizard/test/pulls{/number}',
  milestones_url:
    'https://api.github.com/repos/onlyasmalllizard/test/milestones{/number}',
  notifications_url:
    'https://api.github.com/repos/onlyasmalllizard/test/notifications{?since,all,participating}',
  labels_url:
    'https://api.github.com/repos/onlyasmalllizard/test/labels{/name}',
  releases_url:
    'https://api.github.com/repos/onlyasmalllizard/test/releases{/id}',
  deployments_url:
    'https://api.github.com/repos/onlyasmalllizard/test/deployments',
  created_at: '2021-11-08T14:29:02Z',
  updated_at: '2021-11-08T14:30:35Z',
  pushed_at: '2021-11-08T14:30:33Z',
  git_url: 'git://github.com/onlyasmalllizard/test.git',
  ssh_url: 'git@github.com:onlyasmalllizard/test.git',
  clone_url: 'https://github.com/onlyasmalllizard/test.git',
  svn_url: 'https://github.com/onlyasmalllizard/test',
  homepage: null,
  size: 0,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'JavaScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  allow_forking: true,
  is_template: false,
  topics: [],
  visibility: 'public',
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'main',
  temp_clone_token: null,
  network_count: 0,
  subscribers_count: 1,
};

export const multipleCommitsResponse: ICommit[] = [
  {
    author: {
      name: 'Lizard Morrow',
      email: 'lizardmorrow@gmail.com',
      date: '2021-10-28T08:32:03Z',
    },
    committer: {
      name: 'Lizard Morrow',
      email: 'lizardmorrow@gmail.com',
      date: '2021-10-28T08:32:03Z',
    },
    message: 'Add second test',
    tree: {
      sha: 'd70223432bff527ae2b99bb458e751822d9a187d',
      url: 'https://api.github.com/repos/onlyasmalllizard/github-tests/git/trees/d70223432bff527ae2b99bb458e751822d9a187d',
    },
    url: 'https://api.github.com/repos/onlyasmalllizard/github-tests/git/commits/9b09dd4f56b6131a5f564d910fa24a81a0415a10',
    comment_count: 0,
    verification: {
      verified: false,
      reason: 'unsigned',
      signature: null,
      payload: null,
    },
  },
  {
    author: {
      name: 'Lizard Morrow',
      email: 'lizardmorrow@gmail.com',
      date: '2021-10-26T12:06:31Z',
    },
    committer: {
      name: 'Lizard Morrow',
      email: 'lizardmorrow@gmail.com',
      date: '2021-10-26T12:06:31Z',
    },
    message: 'Change name in json file',
    tree: {
      sha: '5ebeefa9ab3cb4ff5ab49c8e9f5698b2cff2708e',
      url: 'https://api.github.com/repos/onlyasmalllizard/github-tests/git/trees/5ebeefa9ab3cb4ff5ab49c8e9f5698b2cff2708e',
    },
    url: 'https://api.github.com/repos/onlyasmalllizard/github-tests/git/commits/71034072fa49fb8afcbd5285ec22ab882a49c6ac',
    comment_count: 0,
    verification: {
      verified: false,
      reason: 'unsigned',
      signature: null,
      payload: null,
    },
  },
  {
    author: {
      name: 'Lizard Morrow',
      email: 'lizardmorrow@gmail.com',
      date: '2021-10-25T14:55:19Z',
    },
    committer: {
      name: 'Lizard Morrow',
      email: 'lizardmorrow@gmail.com',
      date: '2021-10-25T14:55:19Z',
    },
    message: 'Fix broken test',
    tree: {
      sha: 'd1928be009a4aa1efb8e8242c5f6a20c935f5b75',
      url: 'https://api.github.com/repos/onlyasmalllizard/github-tests/git/trees/d1928be009a4aa1efb8e8242c5f6a20c935f5b75',
    },
    url: 'https://api.github.com/repos/onlyasmalllizard/github-tests/git/commits/b0622f8e6c724c0e69646f8d59aceb17890b2b00',
    comment_count: 0,
    verification: {
      verified: false,
      reason: 'unsigned',
      signature: null,
      payload: null,
    },
  },
  {
    author: {
      name: 'Lizard Morrow',
      email: 'lizardmorrow@gmail.com',
      date: '2021-10-25T14:50:55Z',
    },
    committer: {
      name: 'Lizard Morrow',
      email: 'lizardmorrow@gmail.com',
      date: '2021-10-25T14:50:55Z',
    },
    message: 'Remove travis configuration file',
    tree: {
      sha: 'ffcac82c289193d52fc3bd01ba523f97813547c0',
      url: 'https://api.github.com/repos/onlyasmalllizard/github-tests/git/trees/ffcac82c289193d52fc3bd01ba523f97813547c0',
    },
    url: 'https://api.github.com/repos/onlyasmalllizard/github-tests/git/commits/abaea2deac5d46f8a6597e49c15b7986bcaa826a',
    comment_count: 0,
    verification: {
      verified: false,
      reason: 'unsigned',
      signature: null,
      payload: null,
    },
  },
  {
    author: {
      name: 'Lizard Morrow',
      email: 'lizardmorrow@gmail.com',
      date: '2021-10-21T09:01:07Z',
    },
    committer: {
      name: 'Lizard Morrow',
      email: 'lizardmorrow@gmail.com',
      date: '2021-10-21T09:01:07Z',
    },
    message: 'Break test',
    tree: {
      sha: 'a02ac5f43cf31dda1d30b0a6637cc2044a44ed74',
      url: 'https://api.github.com/repos/onlyasmalllizard/github-tests/git/trees/a02ac5f43cf31dda1d30b0a6637cc2044a44ed74',
    },
    url: 'https://api.github.com/repos/onlyasmalllizard/github-tests/git/commits/9e845972e31bfd7ce17bdc57e24e6023b3cdad03',
    comment_count: 0,
    verification: {
      verified: false,
      reason: 'unsigned',
      signature: null,
      payload: null,
    },
  },
  {
    author: {
      name: 'Lizard Morrow',
      email: 'lizardmorrow@gmail.com',
      date: '2021-10-21T08:52:37Z',
    },
    committer: {
      name: 'Lizard Morrow',
      email: 'lizardmorrow@gmail.com',
      date: '2021-10-21T08:52:37Z',
    },
    message: 'Configure Travis',
    tree: {
      sha: 'fbe18026c613b5a42bbeb24938b5d44eb805738c',
      url: 'https://api.github.com/repos/onlyasmalllizard/github-tests/git/trees/fbe18026c613b5a42bbeb24938b5d44eb805738c',
    },
    url: 'https://api.github.com/repos/onlyasmalllizard/github-tests/git/commits/b7ec96cd74b66ac0047590ea217de68f0d6f0cad',
    comment_count: 0,
    verification: {
      verified: false,
      reason: 'unsigned',
      signature: null,
      payload: null,
    },
  },
  {
    author: {
      name: 'Lizard Morrow',
      email: 'lizardmorrow@gmail.com',
      date: '2021-10-20T12:53:44Z',
    },
    committer: {
      name: 'Lizard Morrow',
      email: 'lizardmorrow@gmail.com',
      date: '2021-10-20T12:53:44Z',
    },
    message: 'Configure circleci',
    tree: {
      sha: 'd1928be009a4aa1efb8e8242c5f6a20c935f5b75',
      url: 'https://api.github.com/repos/onlyasmalllizard/github-tests/git/trees/d1928be009a4aa1efb8e8242c5f6a20c935f5b75',
    },
    url: 'https://api.github.com/repos/onlyasmalllizard/github-tests/git/commits/aca9600820f07c0f058db1be82b3855a23fa58f2',
    comment_count: 0,
    verification: {
      verified: false,
      reason: 'unsigned',
      signature: null,
      payload: null,
    },
  },
  {
    author: {
      name: 'Lizard Morrow',
      email: 'lizardmorrow@gmail.com',
      date: '2021-10-20T10:20:21Z',
    },
    committer: {
      name: 'Lizard Morrow',
      email: 'lizardmorrow@gmail.com',
      date: '2021-10-20T10:20:21Z',
    },
    message: 'First commit',
    tree: {
      sha: '8a36cfdf6506e07b4433a5846f64aeda8cba1083',
      url: 'https://api.github.com/repos/onlyasmalllizard/github-tests/git/trees/8a36cfdf6506e07b4433a5846f64aeda8cba1083',
    },
    url: 'https://api.github.com/repos/onlyasmalllizard/github-tests/git/commits/f9f0ae79bfcfca2e5b1123b3489ed449c929d7eb',
    comment_count: 0,
    verification: {
      verified: false,
      reason: 'unsigned',
      signature: null,
      payload: null,
    },
  },
];

export const multipleCommitsCorrectResult: ICommit = {
  author: {
    name: 'Lizard Morrow',
    email: 'lizardmorrow@gmail.com',
    date: '2021-10-28T08:32:03Z',
  },
  committer: {
    name: 'Lizard Morrow',
    email: 'lizardmorrow@gmail.com',
    date: '2021-10-28T08:32:03Z',
  },
  message: 'Add second test',
  tree: {
    sha: 'd70223432bff527ae2b99bb458e751822d9a187d',
    url: 'https://api.github.com/repos/onlyasmalllizard/github-tests/git/trees/d70223432bff527ae2b99bb458e751822d9a187d',
  },
  url: 'https://api.github.com/repos/onlyasmalllizard/github-tests/git/commits/9b09dd4f56b6131a5f564d910fa24a81a0415a10',
  comment_count: 0,
  verification: {
    verified: false,
    reason: 'unsigned',
    signature: null,
    payload: null,
  },
};

export const singleCommitResponse: ICommit[] = [
  {
    author: {
      name: 'Lizard Morrow',
      email: 'lizardmorrow@gmail.com',
      date: '2021-11-08T14:30:23Z',
    },
    committer: {
      name: 'Lizard Morrow',
      email: 'lizardmorrow@gmail.com',
      date: '2021-11-08T14:30:23Z',
    },
    message: 'First commit',
    tree: {
      sha: '648fc22325557f6b4816bcdde1d81647cf24bf7e',
      url: 'https://api.github.com/repos/onlyasmalllizard/test/git/trees/648fc22325557f6b4816bcdde1d81647cf24bf7e',
    },
    url: 'https://api.github.com/repos/onlyasmalllizard/test/git/commits/de34d6753a5eb822b66bf447e80556eb5da546f3',
    comment_count: 0,
    verification: {
      verified: false,
      reason: 'unsigned',
      signature: null,
      payload: null,
    },
  },
];

export const singleCommitCorrectResult: ICommit = {
  author: {
    name: 'Lizard Morrow',
    email: 'lizardmorrow@gmail.com',
    date: '2021-11-08T14:30:23Z',
  },
  committer: {
    name: 'Lizard Morrow',
    email: 'lizardmorrow@gmail.com',
    date: '2021-11-08T14:30:23Z',
  },
  message: 'First commit',
  tree: {
    sha: '648fc22325557f6b4816bcdde1d81647cf24bf7e',
    url: 'https://api.github.com/repos/onlyasmalllizard/test/git/trees/648fc22325557f6b4816bcdde1d81647cf24bf7e',
  },
  url: 'https://api.github.com/repos/onlyasmalllizard/test/git/commits/de34d6753a5eb822b66bf447e80556eb5da546f3',
  comment_count: 0,
  verification: {
    verified: false,
    reason: 'unsigned',
    signature: null,
    payload: null,
  },
};
