# waka-healthcheck

This is a Lambda that hits a bunch of Waka endpoints to make sure it's online. It runs every 10 minutes. Eventually, data will be pulled here to display a status alert inside Waka.

### html

* Tāmaki Makaurau: <https://assets-us-west-2.waka.app/status/nz-akl.html>
* Te Whanganui-a-Tara: <https://assets-us-west-2.waka.app/status/nz-wlg.html>

### json

* Tāmaki Makaurau: <https://assets-us-west-2.waka.app/status/nz-akl.json>
* Te Whanganui-a-Tara: <https://assets-us-west-2.waka.app/status/nz-wlg.json>

## Deployments

Simply do a `npm install`, zip up the directory, and upload it to AWS Lambda. Make sure the Lambda has an IAM role to write to S3.
