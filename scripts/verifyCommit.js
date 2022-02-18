const msg = require('fs')
    .readFileSync('.git/COMMIT_EDITMSG', 'utf-8')
    .trim();

const commitRe = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/
const mergeRe = /^(Merge pull request|Merge branch)/

if (!commitRe.test(msg)) {
    if (!mergeRe.test(msg)) {
        console.log("git commit message verification failed.");

        console.error(`git commit的信息格式不对, 需要使用 title(scope): desc的格式
              比如 fix: xxbug
              feat(test): add new       
              具体校验逻辑看 scripts/verifyCommit.js    
        `);
        process.exit(1);
    } else {
        console.log('git commit message verification passed.');
    }
}