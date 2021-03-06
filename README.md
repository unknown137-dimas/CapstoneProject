# BantuAku Apps
BantuAku : BantuAku GitHub Repositories of BANGKIT ACADEMY 2022 Capstone Project from 3 learning path. Machine Learning, Mobile Development, Cloud Computing from team C22-PS084.

# About The Project
In Indonesia, there are a lot of small businesses that still encounter difficulties on how to improve and manage their business. They don't know the best way to do it, and still rely on trial and error methods. From the problem statement and information above, we will answer the question of how to help business owners overcome the difficulties. The reason why we choose this problem is because we want to help small business owners to grow their business. This app will provide experts in their specific area so small business owners can get experts insights and knowledge for their business, based on the problem that the small business has. Hopefully with this business mentoring app, small business owners can improve their business.

# Team Members
## Team ID : C22-PS084
<br>

| Name                       |  Student ID  | Path                |
| -------------------------- | ------------ | ------------------- |
| Dimas Fitrio Kurniawan     |  M7008F0875  | Machine Learning    |
| Naqiya Mutmainnah 	     |  M2312J2688  | Machine Learning    |
| Ananda Eka Agusta          |  A7297F2536  | Mobile Development  |
| Farah Fitridhia Fadhilah   |  A2008F0886  | Mobile Development  |
| Gigih Haryo Yudhanto	     |  C2008F0876  | Cloud Computing     |
| Vincentius Willy Ardiyanto |  C7297F2539  | Cloud Computing     |

# Deployment
## Create the Docker Image for Deployment
1. First, clone this repository
   
    ```
    git clone https://github.com/unknown137-dimas/CapstoneProject.git
    ```

2. Switch to repository's directory
   
    ```
    cd CapstoneProject
    ```

3. Pull the latest TensorFlow Serving docker image:
   
   ```
   docker pull tensorflow/serving
   ```

4. Run a serving image as a daemon:
   
   ```
   docker run -d --name serving_base tensorflow/serving
   ```

5. Next, copy your SavedModel to the container's model folder:
   
   ```
   docker cp ML/savedModel/dataset_model serving_base:/models/dataset_model/1
   ```
   
6. Finally, commit the container that's serving your model by changing MODEL_NAME to match your model's name:

    ```
    docker commit --change "ENV MODEL_NAME dataset_model" serving_base ml_model
    ```

7. You can now stop serving_base

   ```
   docker kill serving_base
   ```

8. This will leave you with a Docker image called ```ml_model``` that you can deploy and will load the model for serving on startup.

## Deploy the Docker Image in Google Cloud Platform
1. First, tag the created docker image:

    ```
    docker tag ml_model gcr.io/<PROJECT-ID>/ml_model
    ```

2. Push the tagged docker image to Google Cloud Hub:

    ```
    docker push gcr.io/<PROJECT-ID>/ml_model
    ```

3. Create instance in the Google Cloud Platform

## Cloud Computing Deployment
1. For cloud computing deployment, please refer to this [README.md](https://github.com/unknown137-dimas/CapstoneProject/blob/master/CC/README.md)

2. For API documentation, please refer to this [API Documentation](https://github.com/unknown137-dimas/CapstoneProject/blob/master/CC/api_documentation.md)