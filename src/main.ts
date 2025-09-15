import * as core from "@actions/core";
import * as installer from "./installer";
import axios, { isAxiosError } from "axios";

async function validateSubscription(): Promise<void> {
  const API_URL = `https://agent.api.stepsecurity.io/v1/github/${process.env.GITHUB_REPOSITORY}/actions/subscription`;

  try {
    await axios.get(API_URL, { timeout: 3000 });
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 403) {
      core.error(
        "Subscription is not valid. Reach out to support@stepsecurity.io",
      );
      process.exit(1);
    } else {
      core.info("Timeout or API not reachable. Continuing to next step.");
    }
  }
}

async function run() {
  try {
    await validateSubscription();
    const version = core.getInput("version");
    const includePreReleases = convertToBoolean(
      core.getInput("include-pre-releases"),
    );
    const repoToken = core.getInput("repo-token");
    await installer.getProtoc(version, includePreReleases, repoToken);
  } catch (error) {
    core.setFailed(`${error}`);
  }
}

run();

function convertToBoolean(input: string): boolean {
  try {
    return JSON.parse(input);
  } catch (e) {
    return false;
  }
}
