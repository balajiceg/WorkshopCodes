var code=`
print('Hello World')
_._
help(print)
_._
a=10
_._
a="CEG Tech Forum ceg"
_._
len(a)
_._
a.replace('c','a')
_._
a=True
_._
a=1.000084
_._
type(a)
_._
l=[1,2,3,4]
_._
l=["idiot","vignesh","arun"]
_._
l.sort()
_._
l=[1,2,3,False,"vignesh",1.2323]
_._
l[4]="idiot"
_._
l[1:3]
_._
l[2:]
_._
l[1:-1]
_._
tos = ( 'abcd', 786 , 2.23, 'john', 70.2 )
_._
tos[3]=9
_._
dict = {}
dict['one'] = "This is one"
dict[2] = "This is two"
_._
print(dict['one'])
_._
tinydict = {'name': 'idiot','cgpa':6.5, 'dept': 'geo informatics'}
_._
tinydict.keys()
_._
tinydict.values()
_._
tinydict['name']='Balaji'
_._
a=19
_._
b=2
_._
a+b
_._
a%b
_._
a**b
_._
a//b
_._
a==b
_._
a!=b
_._
a>=b
_._
a-=b
_._
a+=b
_._
c=True
_._
d=False
_._
a>b and c
_._
a>b and c==true
_._
amount=input("Enter amount: ")
_._
amount+=100
_._
type(amount)
_._
amount=int(input("Enter amount: "))
_._
amount=int(input("Enter amount: "))
if amount<1000:
    discount=amount*0.05
    print ("Discount",discount)
else:
    discount=amount*0.10
    print ("Discount",discount)
print ("Net payable:",amount-discount)
_._
if amount<1000:
    discount=amount*0.05
    print ("Discount",discount)
elif amount<5000:
    discount=amount*0.10
    print ("Discount",discount)
else:
    discount=amount*0.15
    print ("Discount",discount)
    print ("Net payable:",amount-discount)
_._
range(5)
_._
list(range(5))
_._
list(range(4,23))
_._
for var in list(range(5)):
    print (var)
_._
fruits = ['banana', 'apple', 'mango']
for fruit in fruits:
    print ('Current fruit :', fruit)
print ("Good bye!")
_._
var = 9
while var != 1 : # This constructs an infinite loop
    var = int(input("Enter a number :"))
    print ("You entered: ", var)
print ("Good bye!")
_._
count = 0
while count < 5:
    print (count, " is less than 5")
    count = count + 1
else:
    print (count, " is not less than 5")
_._
count = 0
while count < 5:
    print (count, " is less than 5")
    count = count + 1
    break
else:
    print (count, " is not less than 5")
_._
count = 0
while count < 5:
    print (count, " is less than 5")
    if count==3:continue
    count = count + 1
else:
    print (count, " is not less than 5")
_._
def sub(a,b):
    c=a-b
    return c
_._
sub(3,1)
_._
sub(b=3,a=1)
_._
import numpy as np
_._
a = np.array([[1, 2], [3, 4]])
_._
a = np.array([1, 2, 3], dtype=complex)
_._
a=np.array([[1,2,3],[4,5,6]])
_._
a.shape
_._
b = a.reshape(3,2)
_._
a = np.arange(24)
_._
b = a.reshape(2,4,3)
_._
x = np.empty([3,2], dtype=int)
_._
x = np.zeros(5)
_._
x[2]='as'
_._
x = np.zeros((5,3))
_._
x = np.ones([2,2], dtype=int)
_._
x = np.arange(5, dtype=float)
_._
x = np.arange(10,20,2)
_._
np.random.rand(3,3)
_._
np.random.randint(7,size=(3,3))
_._
import matplotlib.pyplot as plt
import numpy as np

t = np.arange(0.0, 2.0, 0.01)
s = 1 + np.sin(2*np.pi*t)
plt.plot(t, s)

plt.xlabel('time (s)')
plt.ylabel('voltage (mV)')
plt.title('About as simple as it gets, folks')
plt.grid(True)
plt.savefig("test.png")
plt.show()
_._
import cv2
import numpy as np
import matplotlib.pyplot as plt

image = np.zeros((512,512,3),np.uint8)
plt.imshow(image)
plt.show()

_._
image.fill(100);

_._
image.fill(255);
_._
image=np.random.randint(255,size=(512,512,3),dtype=np.uint8)
_._


`;