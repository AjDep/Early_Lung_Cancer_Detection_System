import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

data = pd.read_csv("DataSet.csv")

x = data[["AlkanePercentageppm"]]
y = data["CancerStatus"]

from sklearn.model_selection import train_test_split
x_train,x_test,y_train,y_test = train_test_split(x,y)

from sklearn.linear_model import LogisticRegression
model = LogisticRegression()
model.fit(x_train,y_train)

print(x_test)
print(model.predict(x_test))
print(model.predict([[750]]))

import seaborn as sns

sns.regplot(x=x,y=y,data=data, logistic = True, ci = None)
plt.show()






# plt.plot(x,y)
# plt.show()

