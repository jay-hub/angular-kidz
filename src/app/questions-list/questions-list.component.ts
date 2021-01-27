import { Component } from "@angular/core";
import { questions } from "../questions";

@Component({
  selector: "app-product-list",
  templateUrl: "./questions-list.component.html",
  styleUrls: ["./questions-list.component.css"],
})
export class QuestionsListComponent {
  questions = questions;

  share() {
    window.alert("The product has been shared!");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
