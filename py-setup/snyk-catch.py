import json
from github_action_utils import event_payload

# Get payload from the evnents check_run

event_payload = event_payload()
print(event_payload)
# Check for snyk Open source license in pending state
if event_payload.context.startswith( "license/snyk") and event_payload.state == 'pending':
  # Report that 
  print("Snyk Open source license check is in progress")
  action(event_payload, "oss-license-scan")
elif event_payload['context'].startswith( "security/snyk") and event_payload.state == 'pending':
  # Report that 
  print("Snyk Open source license check is in progress")
  action(event_payload, "sca-scan")
elif event_payload.context.startswith( "code/snyk") and event_payload.state == 'pending':
  # Report that code scan is in progress
  print("Snyk code is in progress")
  action(event_payload, "code-scan")
else:
  # Catch-all?
  print("Skipping checks")



def action(payload, action):
  print("Taking action", action)
