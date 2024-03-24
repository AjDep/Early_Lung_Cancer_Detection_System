from flask import Flask,jsonify,request
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import warnings

app = Flask(__name__)

#For ignoring warning

# warnings.filterwarnings("ignore")

def FeatureDetection(features):
    YELLOW_FINGERS = int(features[0])
    ANXIETY = int(features[1])
    PEER_PRESSURE = int(features[2])
    CHRONICDISEASE = int(features[3])
    FATIGUE = int(features[4])
    ALLERGY = int(features[5])
    WHEEZING = int(features[6])
    ALCOHOLCONSUMING = int(features[7])
    COUGHING = int(features[8])
    SWALLOWINGDIFFICULTY = int(features[9])
    CHESTPAIN = int(features[10])

    df=pd.read_csv('FeatureDataSet.csv') #Reading the data from the Data Set file

    #print(df)
    #print(df.shape) #This is used to visualize the number of columns and rows in the dataset
    #print(df.duplicated().sum()) #Checking for data duplicates
    #print(df.isnull().sum()) #Checking for number of null records
    #print(df.info())  #Printing all the data in the dataset
    #print(df.describe())


    #This is the preprocessing phase of the dataset
    #Converting non-numerical data to numerical data and converting 1s and 2s into 0s and 1s
    from sklearn import preprocessing
    le=preprocessing.LabelEncoder()
    df['GENDER']=le.fit_transform(df['GENDER'])
    df['LUNG_CANCER']=le.fit_transform(df['LUNG_CANCER'])
    df['SMOKING']=le.fit_transform(df['SMOKING'])
    df['YELLOW_FINGERS']=le.fit_transform(df['YELLOW_FINGERS'])
    df['ANXIETY']=le.fit_transform(df['ANXIETY'])
    df['PEER_PRESSURE']=le.fit_transform(df['PEER_PRESSURE'])
    df['CHRONIC DISEASE']=le.fit_transform(df['CHRONIC DISEASE'])
    df['FATIGUE ']=le.fit_transform(df['FATIGUE '])
    df['ALLERGY ']=le.fit_transform(df['ALLERGY '])
    df['WHEEZING']=le.fit_transform(df['WHEEZING'])
    df['ALCOHOL CONSUMING']=le.fit_transform(df['ALCOHOL CONSUMING'])
    df['COUGHING']=le.fit_transform(df['COUGHING'])
    df['SHORTNESS OF BREATH']=le.fit_transform(df['SHORTNESS OF BREATH'])
    df['SWALLOWING DIFFICULTY']=le.fit_transform(df['SWALLOWING DIFFICULTY'])
    df['CHEST PAIN']=le.fit_transform(df['CHEST PAIN'])
    df['LUNG_CANCER']=le.fit_transform(df['LUNG_CANCER'])

    #print(df)
    #df.info()
    #Let's check the distributaion of Target variable.
    #sns.countplot(x='LUNG_CANCER', data=df,)
    #plt.title('Target Distribution')
    #plt.show()

    #Using the above code the distribution of Lung cancer patients and Healthy patients are displayed. It depicts that the data distribution is imbalance which should be fixed.

    #This is a function that is used to view the distribution of cancer controls and healthy controls based on gender
    # def plot(col, df=df):
    #     return df.groupby(col)['LUNG_CANCER'].value_counts(normalize=True).unstack().plot(kind='bar', figsize=(8,5))

    #plot('GENDER')
    #plt.show()

    #linkcode
    #From the visualizations, it is clear that in the given dataset,
    #the features GENDER, AGE, SMOKING and SHORTNESS OF BREATH don't have that much relationship with LUNG CANCER.
    #So let's drop those features to make this dataset more clean.

    df_new=df.drop(columns=['GENDER','AGE', 'SMOKING', 'SHORTNESS OF BREATH']) #Dropping less related columns
    
    #print(df_new)
    #df_new.info()

    #finding corelations
    cn = df_new.corr()
    #print(cn)

    # The correlation matrix shows that ANXIETY and YELLOW_FINGERS are correlated more than 50%.
    # So, lets create a new feature combining them
    df_new['ANXYELFIN'] = df_new['ANXIETY']*df_new['YELLOW_FINGERS']
    #print(df_new)

    #Splitting independent and dependent variables
    X = df_new.drop('LUNG_CANCER', axis = 1)
    y = df_new['LUNG_CANCER']

    #Adjust the imbalance of the data set and resample it accordingly
    from imblearn.over_sampling import ADASYN
    adasyn = ADASYN(random_state=42)
    X, y = adasyn.fit_resample(X, y)

    #Splitting data for training and testing
    from sklearn.model_selection import train_test_split
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size= 0.25, random_state=0)
    # print("X_test",X_test)
    #Fitting SVC to the training set
    from sklearn.svm import SVC
    svc_model = SVC()
    svc_model.fit(X_train, y_train)

    #Predicting result using testing data
    # y_svc_pred= svc_model.predict(X_test)
    #print(y_svc_pred)
    feature_prediction = svc_model.predict([[YELLOW_FINGERS, ANXIETY, PEER_PRESSURE, CHRONICDISEASE, FATIGUE, ALLERGY, WHEEZING,
                        ALCOHOLCONSUMING, COUGHING, SWALLOWINGDIFFICULTY, CHESTPAIN, (ANXIETY * YELLOW_FINGERS)]])
    print("Feature prediction ",feature_prediction)
    return feature_prediction
    # #Model accuracy
    # svc_cr = classification_report(y_test, y_svc_pred)
    # print(svc_cr)

def AlkanePercentageDetector(AlkanePercentage):

    data = pd.read_csv("AlkaneDataSet.csv")

    x = data[["Alkane Percentage ppm"]]
    y = data["Cancer Status"]

    from sklearn.model_selection import train_test_split
    x_train,x_test,y_train,y_test = train_test_split(x,y)

    from sklearn.linear_model import LogisticRegression
    model = LogisticRegression()
    model.fit(x_train,y_train)

    #print(x_test)
    #print(model.predict(x_test))
    device_prediction = model.predict([[int(AlkanePercentage)]])
    print("Device Detect ",device_prediction)
    return device_prediction
    # import seaborn as sns
    #
    # sns.regplot(x=x,y=y,data=data, logistic = True, ci = None)
    # plt.show()

@app.route('/predict', methods = ['GET'])
def predict():

    print("I here at line 147 in MLmodel.py")
    print(request.args.get("features"))
    print(request.args.get("alkanePercentage"))
    testingfeaturesvalue = request.args.get("features")
    print("testing first index of features variable ",testingfeaturesvalue[0])
    feature_detection = FeatureDetection(request.args.get("features"))
    device_detection = AlkanePercentageDetector(request.args.get("alkanePercentage"))
    print("I am at line 155 in MLmodel.py")
    try:
        if feature_detection==1 and device_detection==1:
            print("You are at HIGH RISK !!! ")
            return jsonify({'cancerStatus ': "You are at HIGH RISK !!!",'devicePrediction':str(device_detection),'featurePrediction':str(feature_detection)})
        elif device_detection==1 and feature_detection==0:
            print("You are at MODERATE RISK !!! ")
            return jsonify({'cancerStatus ': "You are at MODERATE RISK !!!",'devicePrediction':str(device_detection),'featurePrediction':str(feature_detection)})
        elif device_detection==0 and feature_detection==1:
            print("You are at LOW RISK !!!")
            return jsonify({'cancerStatus ': "You are at LOW RISK !!!",'devicePrediction':str(device_detection),'featurePrediction':str(feature_detection)})
        else :
            print("You are lung CANCER FREE !!!")
            return jsonify({'cancerStatus ': "You are lung CANCER FREE !!!",'devicePrediction':str(device_detection),'featurePrediction':str(feature_detection)})
    except Exception as e:
        print(e)

        


if __name__ == '__main__':
    app.run(debug=True)