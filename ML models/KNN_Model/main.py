import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from collections import Counter

points = {"blue": [[2, 4, 3], [1, 3, 5], [2, 3, 1], [3, 2, 3], [2, 1, 6]],
          "red": [[5, 6, 5], [4, 5, 2], [4, 6, 1], [6, 6, 1], [5, 4, 6]]}

new_point = [8, 5, 4]


def euclidean_distance(p, q):
    return np.sqrt(np.sum((np.array(p) - np.array(q)) ** 2))


class KNearestNeighbors:
    def __init__(self, k=3):
        self.k = k
        self.point = None

    def fit(self, points):
        self.points = points

    def predict(self, new_point):
        distances = []

        for category in self.points:
            for point in self.points[category]:
                distance = self.euclidean_distance(point, new_point)
                distances.append([distance, category])
        categories = [category[1] for category in sorted(distances)[:self.k]]
        result = Counter(categories).most_common(1)[0][0]
        return result

    def euclidean_distance(self, p, q):
        return np.sqrt(np.sum((np.array(p) - np.array(q)) ** 2))


clf = KNearestNeighbors()
clf.fit(points)
print(clf.predict(new_point))

fig = plt.figure(figsize=(15, 12))
ax = fig.add_subplot(111, projection='3d')  # Changed to projection='3d'

ax.grid(True, color='#323232')

ax.set_facecolor('black')
ax.figure.set_facecolor('#121212')
ax.tick_params(axis='x', colors='white')
ax.tick_params(axis='y', colors='white')
ax.tick_params(axis='z', colors='white')  # Added tick_params for z-axis

# Adding points in 3D
[ax.scatter(point[0], point[1], point[2], color='#104DCA', s=60) for point in points['blue']]
[ax.scatter(point[0], point[1], point[2], color='#EF6C35', s=60) for point in points['red']]

new_class = clf.predict(new_point)
color = '#EF6C35' if new_class == 'red' else '#104DCA'
ax.scatter(new_point[0], new_point[1], new_point[2], color=color, marker='*', s=200, zorder=100)

# Plotting lines in 3D
[ax.plot([new_point[0], point[0]], [new_point[1], point[1]], [new_point[2], point[2]], color='#104DCA', linestyle='--', linewidth=1) for point in points['blue']]
[ax.plot([new_point[0], point[0]], [new_point[1], point[1]], [new_point[2], point[2]], color='#EF6C35', linestyle='--', linewidth=1) for point in points['red']]

plt.show()
