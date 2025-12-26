module.exports = {
  types: [
    { value: 'feat', name: 'feat:     Addition or removal of a feature' },
    { value: 'fix', name: 'fix:      Bug fix' },
    { value: 'ci', name: 'ci:       Changes affecting CI configuration' },
    {
      value: 'build',
      name: 'build:    Changes affecting the build system, tooling, dependencies, project versions',
    },
    { value: 'docs', name: 'docs:     Documentation only changes' },
    {
      value: 'refactor',
      name: 'refactor: Code changes that neither fix a bug nor add a feature (e.g. code restructuring)',
    },
    {
      value: 'perf',
      name: 'perf:     Refactor changes where the goal is to improve performance',
    },
    {
      value: 'style',
      name: 'style:    Changes that do not affect the meaning of the code (e.g. formatting)',
    },
    { value: 'test', name: 'test:     Adding or modifying tests' },
    {
      value: 'chore',
      name: "chore:    Miscellaneous changes that don't fit in any other category",
    },
    { value: 'revert', name: 'revert:   Revert a commit / to a commit' },
    { value: 'wip', name: 'WIP:      Work in progress (not accepted by CI)' },
  ],

  scopes: [
    // { name: 'example' },
  ],

  usePreparedCommit: false,
  allowTicketNumber: false,
  isTicketNumberRequired: false,

  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nSelect the scope this change affects:',
    customScope: 'Enter custom scope:',
    subject: 'Write a short, imperative tense description of the change:\n',
    body: 'Provide a longer description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any breaking changes (optional):\n',
    footer: 'Issues this commit closes, e.g #123 (optional):\n',
    confirmCommit: 'Are you sure you want to proceed with this commit?',
  },
  breaklineChar: '|',
  askForBreakingChangeFirst: false,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['footer'],
  subjectLimit: 100,
  allowCustomScopes: true,
  scopeRequired: false,
};
