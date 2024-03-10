const core = require('@actions/core');
const github = require('@actions/github');

// Send logs to a dashboard or anywhere else to monitor or alert or act.
const remoteLogger = (payload) => {
  // At time: {TIME} to be filled in the template
  console.log(`Sending data to remote at `)
};

const dispayLog = (payload) => {
  console.log(`Payload ID:, ${payload.id}`);
  console.log(`Description: ${payload.description}`);
  // To-Do: Use chalk to note state?
  console.log(`State: ${payload.state}`);
  console.log(`Snyk Test page: ${payload.target_url}`);
  console.log(`Timestamp: ${payload.updated_at}`);
  remoteLogger(payload);
}

try {
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  const payload = github.context.payload
  // Check for Snyk OSS License payload
  if(payload.context.startsWith('license/snyk')) {
    dispayLog(payload)
  }
  else if(payload.context.startsWith('security/snyk')) {
    dispayLog(payload)
  } 
  else if(payload.context.startsWith('code/snyk')) {
    dispayLog(payload)
  } else {
    console.log(`Skipping ${payload.context.id}`)
  }
} catch (error) {
  core.setFailed(error.message);
}
