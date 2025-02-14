# mongoose_crud
MongoDB CRUD operation with NodeJS

# node
npm init -y

# mongoose (no need mongodb install instead of this mongoose)
npm i mongoose

# for security use env file and ignore in git
npm install dotenv
require("dotenv").config();  // Load environment variables in page
# if in atlas db password have @ use %40 example db password on atlas is test@546 use in copied driver url 
<!-- mongodb+srv://test124:test%40546@cluster0.mnfas.mongodb.net/dbname?retryWrites=true&w=majority&appName=Cluster0 -->
# In a MongoDB connection URI, special characters like @, : and / must be URL-encoded because they have special meanings in URLs.

How to Encode Special Characters
If your password contains special characters like @, #, ?, or &, use URL encoding:

Character	Encoded As
@	%40
:	%3A
/	%2F
?	%3F
=	%3D
&	%26