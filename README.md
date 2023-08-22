# API Validation

![alt text](https://firebasestorage.googleapis.com/v0/b/ble-positioning-system.appspot.com/o/APIValidation.png?alt=media&token=04866a63-e63b-4bc6-aa45-6ffda9825d68)

### Problem statement

The problem statement is to create a couple of endpoints. The structure of request response has been shared with the user.

---

#### API contract

##### GET /caluclator/greeting

Checks whether the service is available.

###### Response

- Code: 200
- Content: `Hello world!`

##### POST /calculator/add

Adds two given numbers

###### Request & Response headers

Content-Type: application/json

###### Body

```
{
    first: number,
    second: number
}
```

###### Success Response

- Status code: 200
- Content: `{ result: result-of-the-summation }`

##### POST /calculator/subtract

Subtracts two given numbers

###### Request & Response headers

Content-Type: application/json

###### Body

```
{
    first: number,
    second: number
}
```

###### Success Response

- Status code: 200
- Content: `{ result: result-of-the-subtraction }`

###### How to submit a solution

In order to submit a solution, follow these steps.

- Fork the **API-Validation** repository ([How to fork a repository github](https://docs.github.com/en/get-started/quickstart/fork-a-repo))
  - Deselect the "Copy the main branch only" to copy other language demos as well
- Clone the forked repository ([How to clone a repository github](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository))
- Change the branch according to the language of your choice (This demo is available in (language-> branch) "node" -> "Node", "python" -> "Python" ) ([How to change branches git ](https://www.freecodecamp.org/news/git-switch-branch/))
- Enable workflows in your github fork (Under the actions tab -> Select "I understand my workflows, go ahead and enable them" to enable the test workflow)
- Use your favourite editor to make changes
- Create a commit after testing it locally ([How to commit git](https://github.com/git-guides/git-commit))
- Push the commit to the remote **to the same branch** (github repo) ([How to push git](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository))
- If all your changes work well, you will see a green tick on the actions section on your repo under the selected branch ([How to see last run action](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history))
  - If it's a cross mark, the logs will tell you what you did wrong.
  - Fix the issue, and repeat steps 4+ to resubmit
- Congratulations, you have successfully solved the problem
