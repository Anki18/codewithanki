import React from "react";

const AddArticle = () => {

    return (
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field">
                    <i class="material-icons prefix">mode_edit</i>
                        <input id="title" type="text" />
                        <label for="title">Title</label>
                    </div>
                    <div class="input-field">
                        <i class="material-icons prefix">mode_edit</i>
                        <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                        <label for="icon_prefix2">Content</label>
                    </div>
                    <div class="input-field">
                        <i class="material-icons prefix">mode_edit</i>
                        <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                        <label for="icon_prefix2">Code</label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddArticle;