import Functions from "../elements/Functions"
function Input(){
      
      return(
            <form>
                  <div>
                        <div>
                              <div className="selection">
                                    <span class="material-symbols-outlined">
                                                arrow_upward
                                    </span>  
                                    <input type="radio" name="action" value="go" />
                              </div>
                              <div className="selection">
                                    <span class="material-symbols-outlined">
                                                arrow_top_right
                                    </span>  
                                    <input type="radio" name="action" value="right" />
                              </div>
                              <div className="selection">
                                    <span class="material-symbols-outlined">
                                                arrow_top_left
                                    </span>  
                              <input type="radio" name="action" value="left" />
                              </div>
                        </div>
                        <div>
                              <div className="selection color-red">
                                    <input type="radio" name="color" value="red" />
                              </div>
                              <div className="selection color-green">
                                    <input type="radio" name="color" value="green" />
                              </div>
                              <div className="selection color-blue">
                              <     input type="radio" name="color" value="blue" />
                              </div>
                        </div>
                        <div>
                              <div className="selection">
                                    <span class="material-symbols-outlined" style={{color:"red"}}>
                                          format_paint
                                    </span>
                                    <input type="radio" name="recolor" value="red" />
                              </div>
                              <div className="selection">
                                    <span class="material-symbols-outlined" style={{color:"green"}}>
                                          format_paint
                                    </span>
                                    <input type="radio" name="recolor" value="green" />
                              </div>
                              <div className="selection">
                                    <span class="material-symbols-outlined" style={{color:"blue"}}>
                                          format_paint
                                    </span>
                                    <input type="radio" name="recolor" value="blue" />
                              </div>
                        </div>
                        <div>
                              <div className="selection">
                                    F0
                                    <input type="radio" name="function" value="f0" />
                              </div>
                              <div className="selection">
                                    F1
                                    <input type="radio" name="function" value="f1" />
                              </div>
                        </div>
                  </div>
                  <div>
                        <Functions />
                  </div>
            </form>
      )
}

export default Input