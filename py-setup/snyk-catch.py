import json
from github_action_utils import event_payload

# Take some action for a payload
def action(payload, action):
  print("Taking action", action)


# Get payload from the evnents check_run
event_payload = event_payload()


if event_payload['context'].startswith('license') and event_payload['state'] == 'pending':
  print('Snyk OSS license is pending')
  action(payload=event_payload, action="with pending OSS License")
elif event_payload['context'].startswith('security') and event_payload['state'] == 'pending':
  print('Snyk SCA is pending')
  action(payload=event_payload, action="with pending Snyk SCA scan")
elif event_payload['context'].startswith('license') and event_payload['state'] == 'pending':
  print('Snyk code scan is pending')
  action(payload=event_payload, action="with pending snyk code scan")
else:
  print("Taking no action, skipping")
