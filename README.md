In this blog post, I’ll guide you through the process of installing and using the Amount Value or Number to Words PCF Control.

Step 1: Navigate to the Quantril GitHub Repository
Go to the Quantril GitHub repository using the link below: https://github.com/Quantril/Number-To-Words-Converter
![image](https://github.com/user-attachments/assets/51e722cd-74ef-43e2-a5c2-52917d677c87)


Step 2: Go to the Releases Section
Once you’re on the GitHub page, click on the Releases tab to access the available versions of the solution.
![image](https://github.com/user-attachments/assets/ba6c4997-3046-4298-b33e-5e3b19672a06)


Step 3: Download the Managed Solution
Download the Managed Solution from the releases section. This is the version you will use to install the PCF control.
![image](https://github.com/user-attachments/assets/7e160db3-705d-49b3-91ab-84578351fec1)


Step 4: Navigate to PowerApps
Go to make.powerapps.com.

Step 5: Select Your Target Environment
Choose your target environment (e.g., Development, UAT, or Production).

Step 6: Open the Solutions Menu
On the left panel, click on the Solutions menu.
![image](https://github.com/user-attachments/assets/f34140f3-b3db-4470-9ff1-9fa01df76d99)


Step 7: Import the Solution
Click Import Solution, and select the Managed Solution file you downloaded in Step 3.
![image](https://github.com/user-attachments/assets/81fe5a50-5eba-49d4-9de9-635c9e019d42)


Step 8: Follow the Import Wizard
Follow the steps in the Import Solution Wizard to complete the solution import.
![image](https://github.com/user-attachments/assets/a8191ba8-7711-4f2a-9b78-2ad9171f1f9e)
![image](https://github.com/user-attachments/assets/5044f355-e455-4371-a57e-7f5d86f3a13c)



Step 9: Create or Open an Unmanaged Solution
Once the solution is installed, navigate to any Unmanaged Solution or create a new one. Add your target Entity and Form that contains the Currency field (data type: Money) and the Currency Lookup field (Transaction Currency, which is the default field).

For example, I’m using a custom entity called Contract Line with the following fields:

Contract Value (Custom field with data type Money)
Currency Lookup (Standard field called transactioncurrency, automatically created by the system)
Amount in Words (Single line of text field, with a maximum length of 2000 characters)
![image](https://github.com/user-attachments/assets/9c7a84d2-9ae1-4352-8257-44d3729c42d6)

Step 10: Open the Form
Open the form where you want to display the amount in words.
![image](https://github.com/user-attachments/assets/570ecb07-63c9-4391-8c5a-40a18f44b42a)


Step 11: Select the Text Field for Display
Select the Single Line of Text field that will display the amount value in words. Then, go to the Components section, click +Component, and look for Currency in Words Control. If you don’t see it, click Get more components.
![image](https://github.com/user-attachments/assets/d6d180de-cd19-4103-a34e-dac73df098ac)


Step 12: Configure the First Input (Amount Field)
For the first input, select the Currency or Money field that holds the numeric value. For example, if you have a contract amount like $20,000, select the appropriate field.
![image](https://github.com/user-attachments/assets/fcb67b7a-c02a-4a54-a34f-62dad8bbeb8a)


Step 13: Configure the Second Input (Currency Lookup Field)
For the second input, select the Currency Lookup field. By default, this field is named Currency, but if you need to display the amount in words in a different currency, select the appropriate currency lookup field.
![image](https://github.com/user-attachments/assets/382e4037-7eec-4a7d-813e-294401419dbd)


Final Selection
After completing the steps, your configuration should look something like this:

First Input: Currency or Money field (e.g., Contract Value)
Second Input: Currency Lookup field (e.g., Currency)
Click Done, Save, and Publish your changes.
![image](https://github.com/user-attachments/assets/99f9a0f3-7e5f-498d-adfe-49ed3dd4a174)


Step 14: Test the Form
Navigate to the form and input a value into the Amount field (for example, the Contract Value field).
![image](https://github.com/user-attachments/assets/d6012534-c865-4da6-9dca-42c65c98fd6b)


See the Magic!
Once you input a value, the system will automatically convert the amount into words (e.g., Twenty Thousand Dollars). It’s as simple as that!


I hope this PCF Control helps you with your business needs. If it does, please give it a thumbs up!
