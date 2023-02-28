// Virtual DOM 是用物件所組成的，所以也稱作Object DOM。
// Virtual DOM 就是實體的HTML DOM Tree一樣，有一樣的結構。
// 為何需要Virtual DOM?
// 當瀏覽器render的時候，會重排整個畫面，當畫面有很多東西的時候，就會開銷很大。
// 所以讓程式中間過度變化的過程，render在Virtual DOM，只讓結果render在HTML DOM Tree。
// 當react將過程中，非結果的內容，作用在Virtual DOM上面，並在最後的時候，將結果複製貼上到ＨＴＭＬ上，減少過程中的開銷。
// JavaScript 有個『diff算法』，只將有做變化的內容做變化。

// 而key，就是diff算法尋找的對象。 (所以前面範例有說，有要唯一值做key，不能用index做key)
// 如果使用index做key，就會在中間值發生變化的時候，index變動，key重排，對virutal DOM 而言就是都改變了，很多不必要的都會從render，很大的開銷。

import React from 'react'