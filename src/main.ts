import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const string: string = core.getInput('string')

    core.debug(`input string: ${string}`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

    const result = string.toUpperCase().replace(/-/g, '_')
    core.debug(`result: ${result}`)
    core.debug(new Date().toTimeString())

    core.setOutput('return', result)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
