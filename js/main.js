function Qoutes(){

    var name=[ '― Oscar Wilde' , '― Frank Zappa'  , '― Mae West' , '― Friedrich Nietzsche', '― Andre Gide' , ]





var text=[
    "“Be yourself; everyone else is already taken.”" , " “So many books, so little time.” " , 
"“You only live once, but if you do it right, once is enough.”" , "“Without music, life would be a mistake.”" , "“It is better to be hated for what you are than to be loved for what you are not.”", ]






var num = Math.floor( Math.random() * name.length)

document.getElementById('person').innerHTML= name[num]
document.getElementById('qoute-title').innerHTML= text[num]

}

