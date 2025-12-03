const book = {bookData:[
    {'id_book': '1','name' :"Everything You Ever Wanted to Know", 'author' :"Upton",'isbn':'082305649x'},
    {'id_book': '2','name' :"Photography", 'author' :"Vilppu",'isbn':'205711499'},
    {'id_book': '3','name' :"Drawing Manual Vilppu", 'author' :"Zelanshi",'isbn':'1892053039'},
    {'id_book': '4','name' :"TBA", 'author' :"Zelanshi",'isbn':'0534613932'},    
    {'id_book': '5','name' :"Shaping Space", 'author' :"Speight",'isbn':'0534613934'},
    {'id_book': '6','name' :"Art Since 1940", 'author' :"Speight",'isbn':'0131839780'},
    {'id_book': '7','name' :"Make it in Clay", 'author' :"Stokstad",'isbn':'0076417011'},
    {'id_book': '8','name' :"Art History Vol II & ala carte lab", 'author' :"Stokstad",'isbn':'205795617'},
    {'id_book': '9','name' :"Accounting Concepts", 'author' :"Albrecht",'isbn':'1111287856'},
    {'id_book': '10','name' :"Intermediate Accounting", 'author' :"Stice",'isbn':'0538479736'},
    {'id_book': '11','name' :"Management Info Systems", 'author' :"Marakas",'isbn':'9780073376813'},
    {'id_book': '12','name' :"Management", 'author' :"Williams",'isbn':'9780757524028'},
    {'id_book': '13','name' :"Leadership Wisdom of Jesus", 'author' :"Manz",'isbn':'9781609940041'},
    {'id_book': '14','name' :"Business Law Today", 'author' :"Miller",'isbn':'9780324786156'},
    {'id_book': '15','name' :"Management Info Systems", 'author' :"Marakas",'isbn':'9780073376813'}],
    getAllBooks: function(){
        console.log(this.bookData);
    },
    getOneBook: function(x){
        const kirja = this.bookData.findIndex(book => book.name === x);
        if (kirja !== -1){
            console.log(this.bookData[kirja]);
        }
        else{
            console.log("Ei löytynyt");
        }
    },
    addBook: function(name, author, isbn){      //Id ei oteta, vaan se asetetaan olemassaolevista, ettei tule duplikaatteja
        const pituus = this.bookData.length -1;
        const suurinId = (Number(this.bookData[pituus].id_book) +1).toString();
        this.bookData.push({id_book:suurinId,name:name,author:author,isbn:isbn});
    }
};

book.getAllBooks();
book.getOneBook('TBA');
book.addBook('2001: Space Odyssey','Clarke','269842698');
book.getAllBooks();