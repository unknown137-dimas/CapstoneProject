# README
<img src="" alt="Logo" width="80" height="80">

This repository uses the **Express Framework** for **Node JS**. This application can be run locally or online by deploying to the Cloud service, in the next section we'll explained how to deploy this application to the **Google Cloud Platform** with **Cloud Run** service. Currently we configured this endpoint to be **accessible to everyone without authentication**. However the configuration can be set by yourself.

## Getting Started

To get a local copy up and running follow these few steps.

### Installation

1. Clone the repo from GitHub:
    ```sh
    git clone https://github.com/unknown137-dimas/CapstoneProject.git
    ```
2. Install NPM Dependencies: 
    ```sh
    npm install
    ```
## Usages
1. Start the App
   ```sh
   npm start
   ```

## Deploy To Cloud Service
### Containerizing an app and uploading it to Container Registry
To containerize the app, Dokcerfile is the configuration when it will be deployed by the service
1. Build your container image using Cloud Build, by running the following command from the directory containing the Dockerfile:
    ```sh
    gcloud builds submit --tag gcr.io/PROJECT-ID/bantuaku
    ```
    Where PROJECT-ID is your GCP project ID. You can get it by running gcloud config get-value project.

2. When success, you will see a SUCCESS message containing the image name (gcr.io/PROJECT-ID/bantuaku). The image is stored in Container Registry and can be re-used if you need.

## Deploying to Cloud Run
### To deploy the container image:
1. Deploy using the following command:
    ```sh
    gcloud run deploy --image gcr.io/PROJECT-ID/bantuaku
    ```
    If prompted to enable the API, Reply **y** to enable.

    Replace PROJECT-ID with your GCP project ID. You can view your project ID by running the command ***gcloud config get-value project.***

      * You will be prompted for the service name: press Enter to accept the default name, **bantuaku.**
      * You will be prompted for region: select the region of your choice, for example **us-central1.**
      * You will be prompted to **allow unauthenticated** invocations: respond **y** .
    
    Then wait a few moments until the deployment is complete. On success, the command line displays the service URL.
2. Visit your deployed container by opening the service URL in a web browser.
