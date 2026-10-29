const cypress = require("cypress");
const fs = require("node:fs");
const path = require("node:path");

async function main() {
  const directory = path.join(__dirname, "../evidencias/atividade-2");
  fs.mkdirSync(directory, { recursive: true });
  for (let execution = 1; execution <= 3; execution += 1) {
    const result = await cypress.run({
      browser: "electron",
      config: { retries: 0, testIsolation: true },
    });
    const summary = {
      execution,
      cypressVersion: result.cypressVersion,
      browserVersion: result.browserVersion,
      startedAt: result.startedTestsAt,
      endedAt: result.endedTestsAt,
      totalTests: result.totalTests,
      totalPassed: result.totalPassed,
      totalFailed: result.totalFailed,
      totalPending: result.totalPending,
      totalSkipped: result.totalSkipped,
      failures: result.failures,
      message: result.message,
      specs: (result.runs || []).map((run) => ({
        spec: run.spec.relative,
        tests: run.tests.map((test) => ({
          title: test.title,
          state: test.state,
          attempts: test.attempts.length,
        })),
      })),
    };
    fs.writeFileSync(path.join(directory, `execucao-${execution}.json`),
      JSON.stringify(summary, null, 2) + "\n");
    if (result.status !== "finished" || result.totalTests !== 5 ||
        result.totalPassed !== 5 || result.totalFailed !== 0 ||
        result.totalPending !== 0 || result.totalSkipped !== 0) {
      throw new Error(`Execução ${execution} reprovada; sequência interrompida.`);
    }
    console.log(`Execução ${execution}/3: 5/5 aprovados, sem retries.`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
