<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('levels', function (Blueprint $table) {
            $table->id();
            $table->longText('board');
            $table->string('colors', 255);
            $table->string('painters', 255);
            $table->string('directions', 255);
            $table->string('functions', 255);
            $table->string('solutions', 255);
            
            $table->timestamps();                  //date record created or edited at
            $table->softDeletes()->invisible();    //date record deleted at

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('levels');
    }
};
