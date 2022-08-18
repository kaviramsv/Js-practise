function isObject(val){
  if(typeof val === 'object' && val !== null && !Array.isArray(val) && typeof val==='function'){
      return true; 
  }
  return false;
}