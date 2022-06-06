# README
<img src="" alt="Logo" width="80" height="80">

This repository is an API reference. This repository uses the **Express Framework** and **Node JS**. This application can be run locally or online by deploying on the Cloud service, in the next section it is explained how to deploy this application on the **Google Cloud Platform** using the **Cloud Run** service. We configured this endpoint to be **accessible to everyone without authentication**. Configuration can be set by yourself. This applicaton 

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/unknown137-dimas/CapstoneProject.git
    ```
2. Install Dependencies: 
    ```sh
    npm install
    ```
## Usages
1. Run the App
   ```sh
   npm start
   ```

## Deploy To Cloud Service
### Containerizing an app and uploading it to Container Registry
To containerize the app, Dokcerfile is the configuration when it will be deployed
1. Build your container image using Cloud Build, by running the following command from the directory containing the Dockerfile:
    ```sh
    gcloud builds submit --tag gcr.io/PROJECT-ID/bantuaku
    ```
    Where PROJECT-ID is your GCP project ID. You can get it by running gcloud config get-value project.

2. Upon success, you will see a SUCCESS message containing the image name (gcr.io/PROJECT-ID/bantuaku). The image is stored in Container Registry and can be re-used if desired.

## Deploying to Cloud Run
### To deploy the container image:
1. Deploy using the following command:
    ```sh
    gcloud run deploy --image gcr.io/PROJECT-ID/bantuaku
    ```
    If prompted to enable the API, Reply **y** to enable.

    Replace PROJECT-ID with your GCP project ID. You can view your project ID by running the command ***gcloud config get-value project.***

      * You will be prompted for the service name: press Enter to accept the default name, **flaskapp.**
      * You will be prompted for region: select the region of your choice, for example **us-central1.**
      * You will be prompted to **allow unauthenticated** invocations: respond **y** .
    
    Then wait a few moments until the deployment is complete. On success, the command line displays the service URL.
2. Visit your deployed container by opening the service URL in a web browser.
