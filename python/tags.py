import csv
import operator


with open('event_short.csv','rb') as f:
	r = csv.reader(f)
	d = {}
	for row in r:
		words = row[2]
		tags = words.split(',')
		for tag in tags:
			
                        if d.has_key(tag):
				d[tag] = d[tag]+1
			else:
				d[tag] = 1
sorted_d = sorted(d.iteritems(), key=operator.itemgetter(1), reverse=True)
print sorted_d
